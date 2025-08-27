
function get_curr_elements_Positions() {
    
    
    let updated_elements_positions = $state({
        pos:{}
    })
  

    return {
        update(rect,index ) {
           
            updated_elements_positions.pos = {...updated_elements_positions.pos,[index]:{X:rect.x, Y:rect.y}}
       
        },
           
        get  updated_elements_positions() { return  updated_elements_positions.pos }
    }
}

export const elements_positions = get_curr_elements_Positions();