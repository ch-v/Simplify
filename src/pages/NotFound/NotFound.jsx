import NotFoundImg from "../../assets/images/NotFound.jpg";

export const NotFound = () => {
   return (
      <>
         <div className="flex flex-col flex-center flex-align-center">
            <img className="img-responsive" src={NotFoundImg} width="700" height="700" alt="NotFound Image"/>
         </div>
      </>
   );
}