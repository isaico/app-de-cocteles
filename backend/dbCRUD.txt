con la base de datos json puedo hacer las peticiones html mas basicas, get, post, put, delete...

tambien en los qry puedo pasarle comandos para limitar y filtrar elementos

en este caso puedo usar:
#GET

 /categories/(id de categ)/cocktails ->listara todos los elementos que coincidan la categria
 /cocktails -> lista de todos los cocteles
 /categories -> todas las categorias

 con comandos qry

 /cocktails?_limit=(numero que quiero) -> limita la lista a cierto numero
 /categories/(id)/cocktails?_limit=(numero) ->limita la lista a cierto numero
 /cocktails?_page=(numero)&_limit=(num) -> hace paginacion y le limita los elementos
 /cocktails?_sort=name&_order=asc-> ordena con un parametro del item y con order la forma 
 /cocktails?_start=20&_end=30 -> un slice del listado