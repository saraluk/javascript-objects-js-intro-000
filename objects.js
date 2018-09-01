var playlist = {ed:'perfect'};
function updatePlaylist(obj,key,value){
  obj[key] = value
  return obj
}

function removeFromPlaylist(obj,key){
  return delete obj.key
}
