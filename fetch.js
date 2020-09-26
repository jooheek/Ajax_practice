fetch('Allow-Control-Allow-Origin:https://www.metaweather.com/api/location/2487956/')
    //https://www.metaweather.com/api/location/2487956/
    //cross domain policy 도메인이 html 주소와 다르기 때문에 오류발생
    // CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
    //request를 proxy또는 channel하는 방법을 쓴다 ex) ajax 로 어플리케이션의 서버에 request한 다음 브라우저로 데이터를 보낸다.
    //1.서버가 없기때문에 https://corsproxy.github.io/를 사용할 것이다.
    //여전히 오류발생...?
    //2.Access-Control-Allow-Origin 플러그인 설치 -> fetch.js:1 Fetch API cannot load allow-control-allow-origin 오류
    //3.chrome 속성>바로가기>대상> --disable-web-security붙이기 -> 이름이 올바르지 않아 실패
    .then(result =>{
        console.log(result);
    })
    .catch(error => console.log(error));