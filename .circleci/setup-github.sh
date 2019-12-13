git config user.name "$USER_NAME"
git config user.email "$USER_EMAIL"

git checkout master
git pull origin master

mv _site/* /docs
rm -R _site/
rm -R node_modules

git add -fA
git commit --allow-empty -m "$(git log -1 --pretty=%B) [ci skip]"
git push origin master

echo "deployed successfully"
