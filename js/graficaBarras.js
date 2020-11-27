function graficaBarra(elem,titulo, data) {
    //titulo
    graficaBarras.addTitle(elem,titulo);
    // linea y 
    graficaBarras.addline(elem, {
        start : {
            x : '15%',
            y : '100px'
        },
        end : {
            x : '15%',
            y : '500px'
        },
        class : 'axisline'
    });
    // line x
    graficaBarras.addline(elem, {
        start : {
            x : '15%',
            y : '500px'
        },
        end : {
            x : '85%',
            y : '500px'
        },
        class : 'axisline'
    });
    
    let max = 0;
    data.forEach(x => {
        if(x.valores > max){
            max = x.valores;
        }
    });

    let desimo = 10;
    while(max >= desimo){
        desimo+= 10;
    }

    let numlines = desimo/10;
    let lines = 400/numlines;
    let des;
    let x =lines;

    if(desimo > 10){
        des =  10;
    }else{
        des =  1;
        x = lines/10;
    }

   
    for(var y = 100; y <=500; y+=x) {
        graficaBarras.addline(elem, {
            start : {
                x : '15%',
                y : y + 'px'
            },
            end : {
                x : '85%',
                y : y + 'px'
            },
            class : 'axisline dashline'
        });
        graficaBarras.addText(elem, {
            text : desimo,
            start : {
                x : '14%',
                y : (y+5) + 'px'
            },
            class : 'axistitle yaxistitle'
        });
        desimo -= des;
    }


    let columnWidth = 70 / data.length,
        xValue = 15;
    data.forEach(data => {
        var barHeight = (data.valores * lines/10);
        var y = 500 - (barHeight);
        graficaBarras.addRectange(elem, {
            start : {
                x : (xValue + 1) + '%',
                y : y + 'px'
            },
            size : {
                width : (columnWidth - 2) + '%',
                height : barHeight + 'px'
            },
            class : 'column'
        });

        // title
        graficaBarras.addText(elem, {
            text : data.nombres,
            start : {
                x : (xValue + (columnWidth / 2)) + '%',
                y : '520px'
            },
            class : 'axistitle xaxistitle'
        });

        // increment xValue
        xValue += columnWidth;
    });
}