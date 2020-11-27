class graficaBarras{
    static addRectange(elem, options) {
        let r = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        this.draw(elem,options,r);
    };
    static addline(elem, options) {
        let l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        this.draw(elem,options,l);
    };
    static addText(elem, options){
        let t = document.createElementNS('http://www.w3.org/2000/svg', 'text'); 
        this.draw(elem,options,t);
    };
    static addPath(elem,options){
        let p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        this.draw(elem,options,p);
    };

    static addCircle(elem,options){
        let c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        this.draw(elem,options,c);
    };
    static addTitle(elem,titulo) {
        if (titulo !== '') {
           let options = {
                text : titulo,
                cordenadas : {
                    x : '50%',
                    y : '30px'
                },
                class : 'title'
            };
            this.addText(elem,options);
        }else{
            console.log("no existe para la grafica titulo por el momento");
        }
    };    
    static draw(elem,op,elemChild){
        if (typeof op !== 'undefined') {
            //texto
            if (typeof op.text !== 'undefined'){
               elemChild.innerHTML = op.text; 
            } 
            //cordenadas a imprimir
           if (typeof op.cordenadas !== 'undefined') {
                if (typeof op.cordenadas.x !== 'undefined') elemChild.setAttribute('x', op.cordenadas.x); else console.error("agrege una cordenada");
                if (typeof op.cordenadas.y !== 'undefined') elemChild.setAttribute('y', op.cordenadas.y); else console.error("agrege una cordenada");
            }
            //en caso qeu contenga una clase el arry
            if (typeof op.class !== 'undefined') elemChild.setAttribute('class', op.class);
            
            if (typeof op.start !== 'undefined') {
                if (typeof op.start.x !== 'undefined' && typeof op.start.y !== 'undefined'){
                    if(elemChild.tagName !== 'line'){
                        elemChild.setAttribute('x', op.start.x); 
                        elemChild.setAttribute('y', op.start.y);
                    }else{
                        elemChild.setAttribute('x1', op.start.x); 
                        elemChild.setAttribute('y1', op.start.y);
                    }
                }
            }
            //end position
            if (typeof op.end !== 'undefined') {
                if (typeof op.end.x !== 'undefined') elemChild.setAttribute('x2', op.end.x); 
                if (typeof op.end.y !== 'undefined') elemChild.setAttribute('y2', op.end.y); 
            }


            if (typeof op.size !== 'undefined') {
                if (typeof op.size.width !== 'undefined') elemChild.setAttribute('width', op.size.width); 
                if (typeof op.size.height !== 'undefined') elemChild.setAttribute('height', op.size.height);
            }

            if (typeof op.id !== 'undefined') elemChild.id = op.id;


            //agregamos al elemento padre
            if (typeof elem !== 'undefined') {
                if (elem != null){ 
                    elem.appendChild(elemChild); 
                }else{ 
                    console.error("elemento padre no existe")
                };
            } 
            else{
                console.error("agrege un elemento donde imprimir");
            } 
        }
        else{
            console.error("agrege las opciones");
        }
    };
}
