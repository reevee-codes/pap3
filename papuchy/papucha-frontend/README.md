# repo frontendowe


## UI mockup
![Alt text](mockups/ui_mockup.excalidraw.svg?raw=true "Title")
you can edit the mockup by dragging the file onto https://excalidraw.com/ and exporting it back as svg, truely magic

## startup (frontend dev)
```
npm i
npx expo start
```

## startup - docker
1. `docker build . -t pm/papucha-frontend`
2. `docker run -p 8081:8081 -d pm/papucha-frontend`

## mobile preview
    install https://expo.dev/client to let mobile run app hosted on your pc

## run
### mobile
    1. open expo client
    2. ensure your pc and phone are on same wifi
    3. check your pc local ip, in our example using `192.168.0.1`
    4. open exopo app
    5. enter URL manyally `exp://192.168.0.1:8081`

### web **NOT DONE YET**
    1. open localhost:8081

## setting up API url
#### A) by creating .env file

```
    EXPO_PUBLIC_API_URL=localhost:2137
```

#### B) by adding temp env variable **wont work in docker unless we edit dockerfile!**
- (linux) - EXPO_PUBLIC_TTT='localhost:2137'; npx expo start
- (powershell) - `$env:EXPO_PUBLIC_TTT = 'localhost:2137'; npx expo start`

## hooks
1. create .discord-link with webhook link
2. run `npm run set-githooks` on linux, doesnt work in powershell
