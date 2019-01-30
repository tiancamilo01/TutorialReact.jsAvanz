import React from 'react';
import {Card,  CardHeader, CardText, CardActions } from 'material-ui/Card';
import { FlatButton } from 'material-ui';

export default class PlaceHorizontal extends React.Component{
    render(){
        return(
            <Card style={{'marginTop': '1em', 'overflow': 'hidden'}}>
                <div className="row" >
                    <div className="PLaceH-avatar" >
                        <img style={{'width': '800px', 'height': '500px'}} src={this.props.place.imageUrl} />
                    </div>
                    <div className="col-xs">
                        <CardHeader 
                            title={this.props.place.title}
                            subtitle={this.props.place.address}
                        />
                        <div className="row middle-xs" >
                            <div className="col-xs-6 col-sm-8 col-lg-9" style={{'textAlign': 'left'}} >
                               <CardText>{this.props.place.description}</CardText> 
                            </div>
                            <div className="col-xs-6 col-sm-8 col-lg-9">
                                <CardActions>
                                    <FlatButton label="Ver más"/>
                                </CardActions> 
                            </div>
                        </div>

                    </div>
                </div>
            </Card>
        );
    }
}