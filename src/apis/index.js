const axios = require('axios')
const jsonp = require('fetch-jsonp')
const queryString = require('query-string')
const { LocalStorage } = require('assets/js/storage.js')

class API {
  constructor() {
    this.BASE = 'https://fm.qq.com/webapp/jsonp'
    this.commonParams = {
      'g_tk': '',
      'inCharset': 'utf-8',
      'outCharset': 'utf-8'
    }
    this.getVKey()
  }

  request(path, params) {
    const url = `${this.BASE + path}?${queryString.stringify(params)}`
    return new Promise((resolve, reject) => {
      jsonp(url, {
        jsonpCallbackFunction: 'qqfm',
        timeout: 1000 * 30
      })
        .then(function (response) {
          return response.json()
        }).then(function (data) {
          resolve(data)
        }).catch(function (ex) {
          reject(ex)
        })
    })
  }

  getVKey() {
    let VKey

    if (!sessionStorage['VKey']) {
      const params = Object.assign({}, this.commonParams, {
        'guid': 10000
      })

      this.request('/fm_vkey/GetVkey', params).then(data => {
        VKey = data.data.vkey
        sessionStorage['VKey'] = VKey
        return data
      })

    } else {
      VKey = sessionStorage['VKey']
    }

    return VKey
  }

  getCategory(id) {
    const category = require('./category.json')
    if (id) {
      return category.filter(a => {
        return a.id === id
      })
    } else {
      return category
    }
  }

  getRecommend() {
    const recommend = require('./recommend.json')
    return recommend
  }

  handleAudioUrl(urls) {
    let VKey = this.getVKey()
    for (let k in urls) {
      urls[k].url = `${urls[k].url}&vkey=${VKey}&guid=10000`
    }
    return urls
  }

  getAlbum(categoryId, index = 0, pageSize = 20) {
    const offset = index * pageSize
    const params = Object.assign({}, this.commonParams, {
      'type': 1,
      'pageType': 1,
      'commonInfo.cookie': `offset=${offset}&pagesize=${pageSize}`,
      'categoryId': categoryId
    })

    let result = this.request('/category_detail/GetAlbumListByCategory', params).then(data => {
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

      return {
        list: albumList,
        total: data.data.total
      }
    })

    return result
  }

  getShowIdList(albumId) {
    let result
    if (!LocalStorage.has(`showIdList_${albumId}`)) {
      result = axios.get('https://api.imjad.cn/qqfm/v1/', { // 由于跨域限制，此处只能使用第三方代理请求
        params: {
          type: 'show',
          id: albumId
        }
      }).then(data => {
        return LocalStorage.set(`showIdList_${albumId}`, data.data)
      })
    } else {
      result = LocalStorage.get(`showIdList_${albumId}`)
    }
    return result
  }

  getShow(albumId, vecIdArray) {
    return new Promise((resolve, reject) => {
      if (!vecIdArray) reject('no vecIdArray')

      const params = Object.assign({}, this.commonParams, {
        'albumid': albumId,
        'pageType': 1
      })

      vecIdArray.forEach((show, index) => {
        params[`vecId._Array${index}`] = show
      })

      this.request('/luobo_show/GetSkipShow', params).then(data => {
        let showList = data.data.showList
        let result = []
        for (let k in showList) {
          let showInfo = showList[k]
          result.push({
            id: showInfo.show.showID,
            name: showInfo.show.name,
            album: showInfo.album.name,
            category: showInfo.album.categoryName,
            desc: showInfo.show.desc,
            cover: showInfo.show.cover.urls[0].url,
            audioUrl: this.handleAudioUrl(showInfo.show.audioURL.urls),
            upload: showInfo.show.createTime,
            duration: showInfo.show.duration
          })
        }

        resolve(result)

      }).catch(ex => {
        reject(ex)
      })
    })






  }
}

export default new API()