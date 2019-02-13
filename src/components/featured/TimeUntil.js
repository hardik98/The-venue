import React, { Component } from 'react';

class TimeUntil extends Component {

     state = {

        Date: 'Dec , 23 , 2018',
        Days:'0',
        Hs:'0',
        Minute:'0',
        Second:'0'

     }


 getTimeUntil(deadline){

 const time = Date.parse(deadline) - Date.parse(new Date());

  if(time<0){

    console.log("time passed");
  }
  else

   {
        const Second = Math.floor((time/1000)%60);
        const Minute = Math.floor((time/1000/60)%60);
        const Days = Math.floor(time/(1000*60*60*24));
        const Hs = Math.floor((time/(1000*60*60))%24);

        this.setState({
      
            Days,
            Second,
            Minute,
            Hs

        })




   }

 }

componentDidMount(){

setInterval(()=>this.getTimeUntil(this.state.Date),1000);

}


    render() {
        return (
            <div className="countdown_wrapper">
                <div className="countdown_top">Event start in</div>

                <div className="countdown_bottom">
                    <div className="countdown_item">
                        <div className="countdown_time">
                           {this.state.Days}
               </div>
                        <div className="countdown_tag">
                            Days
               </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                          {this.state.Hs}
               </div>
                        <div className="countdown_tag">
                            Hs
               </div>
                    </div>

                    <div className="countdown_item">
                        <div className="countdown_time">
                            {this.state.Minute}
               </div>
                        <div className="countdown_tag">
                       Min
               </div>
                    </div>

                    <div className="countdown_item">
                        <div className="countdown_time">
                            {this.state.Second}
               </div>
                        <div className="countdown_tag">
                            Second
               </div>
                    </div>



                </div>
                

            </div>
        );
    }
}

export default TimeUntil;