const axios = require('axios')
const jsonp = require('fetch-jsonp')
const queryString = require('query-string')
const category = require('./category.json')

class API {
  constructor() {
    this.BASE = 'https://fm.qq.com/webapp/jsonp'
    this.G_TK = ''
    this.COOKIE = 'pgv_pvid=8948852633;pgv_info=ssid=s267667616;'
    this.getVKey()

    // this.getShowIdList('rd000IfaGS2cLpeo')
  }

  async request(path, params) {
    const url = `${this.BASE + path}?${queryString.stringify(params)}`
    let data = await jsonp(url, {
      jsonpCallbackFunction: 'qqfm'
    })
      .then(function (response) {
        return response.json()
      }).then(function (data) {
        return data
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })

    return data
  }

  async getVKey() {
    let VKey
    if (!sessionStorage['VKey']) {
      let data = await this.request('/fm_vkey/GetVkey', {
        'g_tk': this.G_TK,
        'guid': 10000,
        'inCharset': 'utf-8',
        'outCharset': 'utf-8'
      })
      VKey = data.data.vkey
    } else {
      VKey = sessionStorage['VKey']
    }
    this.VKey = VKey
    sessionStorage['VKey'] = VKey

    console.log(VKey)

    return VKey
  }

  getCategory(id) {
    if (id) {
      return category.filter(a => {
        return a.id === id
      })
    } else {
      return category
    }
  }

  handleAudioUrl(urls) {
    for (let k in urls) {
      urls[k].url = `${urls[k].url}&vkey=${this.VKey}&guid=10000`
    }
    return urls
  }

  async getAlbum(categoryId, index = 0, pageSize = 20) {
    let offset = index * pageSize

    let result = this.request('/category_detail/GetAlbumListByCategory', {
      'g_tk': this.G_TK,
      'type': 1,
      'pageType': 1,
      'commonInfo.cookie': `offset=${offset}&pagesize=${pageSize}`,
      'categoryId': categoryId,
      'inCharset': 'utf-8',
      'outCharset': 'utf-8'
    }).then(data => {
      let albumInfoList = data.data.albumInfoList
      let albumList = albumInfoList.map(albumInfo => {
        let showList = albumInfo.allShowList.map(showInfo => {
          return {
            id: showInfo.showID,
            name: showInfo.name,
            namalbume: albumInfo.album.name,
            desc: showInfo.desc,
            cover: showInfo.cover.urls[0].url,
            audioUrl: this.handleAudioUrl(showInfo.audioURL.urls)
          }
        })

        return {
          id: albumInfo.album.albumID,
          name: albumInfo.album.name,
          desc: albumInfo.album.desc,
          icon: albumInfo.album.iconText,
          info: albumInfo.album.displayText,
          total: albumInfo.album.showNum,
          score: albumInfo.album.score,
          upload: albumInfo.album.uploadTime,
          cover: albumInfo.album.cover.urls[2].url,
          showList: showList
        }
      })

      let result = {
        list: albumList,
        total: data.data.total
      }
      return result
    })

    console.log(result)
    return result
  }

  async getShowIdList(albumId) {
    let result
    if (!localStorage[`showIdList_${albumId}`]) {
      result = axios.get('https://api.imjad.cn/qqfm/v1/', { // 由于跨域限制，此处只能使用第三方代理请求
        params: {
          type: 'show',
          id: albumId
        }
      }).then(data => {
        return data.data
      })
    } else {
      result = JSON.parse(localStorage[`showIdList_${albumId}`])
    }
    return result
  }

  async getShow(albumId, vecIdArray) {
    if (!vecIdArray) return
    let params = {
      'g_tk': this.G_TK,
      'albumid': albumId,
      'pageType': 1,
      'inCharset': 'utf-8',
      'outCharset': 'utf-8'
    }
    vecIdArray.forEach((show, index) => {
      params[`vecId._Array${index}`] = show
    })
    let result = this.request('/luobo_show/GetSkipShow', params).then(data => {
      let showList = data.data.showList
      let result = []
      for (let k in showList) {
        let showInfo = showList[k]
        result.push({
          id: showInfo.show.showID,
          name: showInfo.show.name,
          album: showInfo.album.name,
          desc: showInfo.show.desc,
          cover: showInfo.show.cover.urls[0].url,
          audioUrl: this.handleAudioUrl(showInfo.show.audioURL.urls),
          upload: showInfo.show.createTime,
          duration: showInfo.show.duration
        })
      }
      return result
    })

    return result
  }
}

export default new API()