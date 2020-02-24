for md in (ls static/markdown/*.md)
  set filename (string split '.' (basename $md) | head -n 1)
  set destination src/routes/blog/html/$filename.js
  echo "export default `" >> $destination
  (cat $md | pandoc --from=markdown --to=html) >> $destination
  echo "`;" >> $destination
end
