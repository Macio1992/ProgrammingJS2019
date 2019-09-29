W konsoli GIT Bash w folderze projektu gdy mamy błąd:

`fatal unable to access ... The requested URL returned error 403`

1) git remote set-url origin https://<username>@github.com/Path_to_repo.git

2) git push -u https://username:password@github.com/username/repo_name.git master

3) git config --global user.email "kuba4live@gmail.com"

git config --global user.name "programmerGdansk2019"
