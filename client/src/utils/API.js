import axios from "axios";
export default {
   getMatches: function (userName,platform){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://call-of-duty-modern-warfare.p.rapidapi.com/warzone-matches/"+userName+"/"+platform,
            "headers": {
                "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
                "x-rapidapi-key": "401c08f482msha8f3fc31e872911p10a56cjsn9db42713d2d4"
            }
        }
        
        axios.get(settings).then(function (response) {
            console.log(response);
            return response.matches;
        });
    }
    
}
