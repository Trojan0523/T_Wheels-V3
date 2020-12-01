rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@gitee.com:Trojan0523/trojan-ui-website.git &&
#git remote add origin git@github.com:Trojan0523/Trojan-UI-website.git &&
git push -f -u origin master &&
cd -