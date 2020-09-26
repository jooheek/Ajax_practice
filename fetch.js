function getWeather(woeid){
    fetch(`https://www.metaweather.com/api/location/${woeid}/`)
        //https://www.metaweather.com/api/location/2487956/
        //cross domain policy 도메인이 html 주소와 다르기 때문에 오류발생
        // CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
        //request를 proxy또는 channel하는 방법을 쓴다 ex) ajax 로 어플리케이션의 서버에 request한 다음 브라우저로 데이터를 보낸다.
        //1.서버가 없기때문에 https://corsproxy.github.io/를 사용할 것이다.
        //여전히 오류발생...?
        //2.Access-Control-Allow-Origin 플러그인 설치 -> fetch.js:1 Fetch API cannot load allow-control-allow-origin 오류
        //3.chrome 속성>바로가기>대상> --disable-web-security붙이기 -> 이름이 올바르지 않아 실패
        //4.chrome 속성에  --disable-web-security --user-data-dir="C:\chrome" 추가 -> 해결
        .then(result =>{
            console.log(result);
            return result.json();
        })
        .then(data =>{
            //console.log(data);
            const today = data.consolidated_weather[0];
            console.log(`tempuratures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}`)
            //오늘 San Francisco의 최고기온, 최저기온을 알아온다.
        })
        //data를 다룰 then 메소드를 생성함
        .catch(error => console.log(error));
}
getWeather(2487956);
getWeather(44418);
