module.exports = {
    secretKey : 'secret key', // 시크릿 키를 넣으세요. 생성해주는 프로그램 사용하셔도 좋습니다.
    option : {
        algorithm : "HS256", // 해싱 알고리즘
        expiresIn : "1m",  // 토큰 유효 기간(s, m, h, d)
        issuer : "hojun" // 발행자
    }
}