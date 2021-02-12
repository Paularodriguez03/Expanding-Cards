const panels = document.querySelectorAll('.panel');
/*se crea una constante llamda panels que llama a las classes panel de Html */


/*forEach() ejecuta la función indicada una vez por cada elemento del array. */

panels.forEach((panel) => {
    //console.log(panel)
    panel.addEventListener('click', () => {
        removeActiveClasses()
        /*Primero se le dice que remueva la propiedad active del panel que la tenga */
        panel.classList.add('active') 
        /*con esto todos los panels se agrandan*/
        /*y a su vez se le dice que al panel de la lista de atiquetas con la clase
        panel que se le dio click se le agrave el active y con esto se agranda segun lo 
        indicado en el css */
    })

})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
        /*esto quita o remueve las carcateriticas de otros
        elemtos aparte del seleccionado*/
    })
}
