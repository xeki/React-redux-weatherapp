import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions';
import Weather from '../reducers/index';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class DisplayWeather extends Component {
	constructor(props) {
		super(props);
				
	}
	renderWeather(cityData){
		console.log("City Data: ",cityData);
		const name = cityData.city.name;
		const temps = cityData.list.map(weather=>weather.main.temp);
		const humidities = cityData.list.map(city=>city.main.humidity)
		const pressures = cityData.list.map(city=>city.main.pressure);
		const {lat,lon} = cityData.city.coord;
		
		return (<tr key={name}>
				<td>
					<GoogleMap lat={lat} lon={lon} />
					
				</td>
				<td>
					<Chart data={temps} color="orange" units="K"/>
				</td>
				<td>
					<Chart data={humidities} color="blue" units="hPa" />
				</td>
				<td>
					<Chart data={pressures} color="brown" units="%"/>
				</td>
		</tr>);
	}
	
	
	render(){
		return (<table className="table table-hover">
					<thead>
						<tr><th>City </th>
							<th>Temperature (K) </th>
							<th>Pressure (hPa) </th>
							<th>Humidity (%) </th>
						</tr>
					</thead>
					<tbody>
						{this.props.weather.map(this.renderWeather)}
					</tbody>
				</table>
				);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather},dispatch);
}
function mapStateToProps(state){
	return {weather: state.weather};
}
export default connect(mapStateToProps,mapDispatchToProps)(DisplayWeather);
