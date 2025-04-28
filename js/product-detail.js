const urlParams = new URLSearchParams(window.location.search);
const modelo = urlParams.get('modelo'); 
const descripcion = urlParams.get('descripcion'); // <<<

if (modelo) {
    const modelUrl = `modelos/${modelo}.glb`; 
    const modelViewer = document.getElementById('modelViewer');
    modelViewer.setAttribute('src', modelUrl); 

    if (descripcion) {
        const descriptionElement = document.getElementById('descripcion');
        descriptionElement.textContent = decodeURIComponent(descripcion);
    }
} else {
    console.error("Modelo no especificado.");
}
