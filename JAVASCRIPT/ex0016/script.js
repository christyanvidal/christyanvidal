function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){ window.alert('[ERRO]Verifíque os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')

        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança   
                 img.setAttribute('src' , 'bebehomem.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src' , 'jovemhomem.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src' , 'adultohomem.png')
            }else{
                //idoso
                img.setAttribute('src' , 'idosohomem.png')
            }
            }else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança    
                img.setAttribute('src' , 'bebemenina.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src' , 'jovemmulher.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src' , 'adultomulher.png')
            }else{
                //idoso
                img.setAttribute('src' , 'idosomulher.png')
            }
        }
        res.innerHTML = `detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}