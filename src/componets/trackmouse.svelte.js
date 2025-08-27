 function trackMouse() {
    let postX = $state(0);
    let postY = $state(0);
    let prevX = $state(0)
    let prevY = $state(0)

     let deltaX = $derived(postX - prevX);
     let deltaY = $derived(postY - prevY);


     return {
        update (event) {
             prevX = postX;
             prevY = postY;
              postY = event.clientY;
              postX = event.clientX;

        },
         get deltaX () { return deltaX ; },
         get deltaY () { return deltaY ; }

     }  
  }

export const track_mouse = trackMouse()