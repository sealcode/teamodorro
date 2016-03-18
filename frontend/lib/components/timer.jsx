var React = require('react');
var ReactCountdownClock = require('react-countdown-clock');

var Timer = React.createClass({
	getMode: function(){
		var lct = this.props.session.body.last_changed_timestamp;
		var at = new Date().getTime();
		var general_state = this.props.session.body.current_state;
		var target_duration;
		if(general_state === "break"){
			target_duration = this.props.session.body.break_duration;
		}else{
			target_duration = this.props.session.body.work_duration;
		}
		console.log(at, lct, target_duration);
		if(at-lct>=target_duration){
			return "after_" + general_state;
		}else{
			return general_state;
		}
	},
	callback: function(){
		console.log('end')
	},
	render: function() {
		console.log(this.props.session)
		if (this.props.session.body) {
			return (
				<div className="content">
					<div className="timer">

						{JSON.stringify(this.props.session)}
						{this.getMode()}
					</div>
				</div>
			);			
		} else {
			return(
				<div><span>loading</span></div>
			)
		}
	}
});

module.exports = Timer;
// 				<ReactCountdownClock 
// 					seconds={60}
// 					color="#ddd"
// 					alpha={0.9}
// 					size={300}
// 					onComplete={this.callback} />