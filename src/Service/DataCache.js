let instance = null;

class DataCache {
    constructor() {
        if (!instance) {
            instance = this;
            this.results = [];
        }
        return instance;
    }

    set Results(items) {
        this.results = items;
    }

    search(searchObj) {
        let searchProm = new Promise((resolve, reject) => {
            var params = searchObj.action+'='+searchObj.value;
            let URL = 'https://itunes.apple.com/'+params+ '&country=us&entity=movie';
            fetch(URL).then((response) => response.json())
                .then((responseData) => {
                    resolve(responseData.results);
                });
        });
        return searchProm;
    }

    getResults(key) {
        if (this.results && this.results.length){
            var keyItem = parseInt(key);
            return this.results.find(function(item){
                return item.trackId === parseInt(keyItem);});
        }
    }
}
export default DataCache;