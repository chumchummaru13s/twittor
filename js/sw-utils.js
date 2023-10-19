 

function actualizarCacheDinamico(dydamicCache, req,res){
    
    if(res.ok){
        return caches.open(dydamicCache).then(cache=>{
            cache.put(req,res.clone());
            return res.clone();
        });
    }else{
        return res;
    }
}