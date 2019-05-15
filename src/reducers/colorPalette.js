export const colorPalette = (state=[] , action) => {
    switch(action.type){
        case "GENERATE_INITIAL":
            let colorPalette = []
            for(var i = 0; i < 5; i++){
                colorPalette.push({
                    hex: "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);}),
                    lock: false
                })
            }
            return colorPalette
        case "GENERATED_PALETTE":
            let colorList = action.palette.map(color => {
                if(color.lock){
                    return color
                }else{
                    return {
                        lock: false,
                        hex: "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);})
                    }
                }
            })
            return colorList;
        case "TOGGLE_LOCK":
            let lockColor = state.map((color, index) => {
                if(action.index === index){
                    return {
                        hex: color.hex,
                        lock: !color.lock
                    }
                }else{
                    return color
                }
            })
            return lockColor;
        case "DISPLAY_PALETTE":
            return action.palette
        default:
            return state;
    }
}