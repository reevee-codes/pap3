- automatyczne generowanie id przy wrzucaniu papugi przez json - DONE
- get all papugi - DONE
- get pojedyncza papuga przez id - DANE
- - get wszystkie papugi danego koloru
- get wszystkie papugi grubsze niz 50gram
- zrobic paczke postmana
- spakowac do dockera
- - logowanie
- call przez token



docker build . -t papucha-service
docker run -p 8080:8080 -it papucha-service