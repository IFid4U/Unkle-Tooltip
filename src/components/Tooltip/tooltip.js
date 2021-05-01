import React from 'react.js';
import './tooltip.css';



function Example() {
    const Button = document.querySelector('#Button');

    
    return (
      <>
        <Button variant="danger"  onClick={() => {
            console.log(Button)}} Click me to see>
        </Button>
        

          {({ placement, arrowProps, show: _show, popper, ...props }) => (
            <div
              {...props}
              style={{
                backgroundColor: 'rgba(255, 100, 100, 0.85)',
                padding: '2px 10px',
                color: 'white',
                borderRadius: 3,
                ...props.style,
              }}
            >
              Simple tooltip
            </div>
          )}
        </>
    );
}
  
render(<Example />);

export default Tooltip;