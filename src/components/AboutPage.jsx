import React from 'react'
import Nav from './Nav'
function Aboutpage() {
  return (
    <>
   <Nav />
  
    <div style={{margin: 50,flexDirection: 'column'  , flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>
           About
        </h1>
    </div>

    <p style={{margin: 50,flexDirection: 'column'  , flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate, orci vel gravida congue, dui nulla condimentum dolor, quis semper tortor erat id turpis. Donec rutrum nulla at nunc bibendum, vel condimentum lectus pretium. Fusce ipsum lorem, efficitur sed mi nec, ultricies laoreet dolor. Quisque condimentum sem mi, quis volutpat dui euismod in. Phasellus bibendum congue ligula, commodo tincidunt dolor interdum vitae. Fusce rutrum, est non pulvinar interdum, tortor urna vehicula justo, sit amet eleifend erat arcu quis quam. Morbi sit amet bibendum elit.

Proin ac dolor nisi. Mauris gravida mi nibh. Vivamus commodo nisi nec ipsum pulvinar ornare. Aliquam purus dui, varius id turpis malesuada, feugiat ornare nibh. Etiam sed interdum metus, nec malesuada mi. Nam bibendum, magna et fermentum auctor, justo enim porta dui, eu sagittis justo odio nec justo. Curabitur eu hendrerit dolor. Sed et libero lorem. Donec vehicula nulla eu nunc porttitor vehicula.
    </p>
    </>
  )
}

export default Aboutpage