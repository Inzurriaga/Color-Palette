export const colorPalette = (state=[], action) => {
    switch(action.type){
        case "GENERATED_PALETTE":
            // find a way to when they lock a color to not change it
            let colorList = [];
            for(var i = 0; i < 5; i++){
                let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
                colorList.push(randomColor)
            };
            return colorList;
        default:
            return state;
    }
}