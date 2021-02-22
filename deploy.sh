
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run build

# 重组文件
yarn cpx "packages/v2/dist/**" dist
yarn cpx "packages/v1/dist/**" dist/v1

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:7revor/7revor.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:HGthecode/thinkphp-apidoc.git master:docs-pages

# 如果使用 travis 持续集成
git push -f https://${access_token}@github.com/HGthecode/thinkphp-apidoc.git master:docs-pages

cd -