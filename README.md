# eternal-force-blizzard

## Usage

### heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

### Docker
```
  docker run
```

### [browserless.io](https://www.browserless.io/)
```
curl -X POST \
  https://chrome.browserless.io/screencast?token=MY-API-TOKEN&--window-size=1920,1080 \
  -o video.webm \
  -H 'Content-Type: application/javascript' \
  -d "$(curl -fsSL https://raw.githubusercontent.com/lahilan/eternal-force-blizzard/HEAD/eternal-force-blizzard.js)"
```
