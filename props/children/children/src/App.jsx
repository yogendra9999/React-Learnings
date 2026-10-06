function Parent({children}) {
  return(
    <div>
      {children}
    </div>
    
  );
}
function ChildComponent() {
  return(
      <Parent>
         <h1>This is the Child Component</h1>

      </Parent>
     
    
  );
}
export default ChildComponent;