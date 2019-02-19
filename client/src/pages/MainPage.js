import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'REACT 16',
    imgPath:
      'https://cdn-images-1.medium.com/max/1200/1*YG3-T77xGBfKDn5SfE6P8w.jpeg',
  },
  {
    label: 'NODEJS',
    imgPath:
      'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png',
  },
  {
    label: 'JWT',
    imgPath:
      'https://cdn-images-1.medium.com/max/2000/1*0ABaK4SrXGUnXgmXqMkZtA.png',
  },
  {
    label: 'BCRYPT',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZZx0xz3esrNQ_my1zeDvKdLB3szAAOCeq84NcyAMS_-qv0B5',
  },
  {
    label: 'DATABASE',
    imgPath:
      'https://nesoy.github.io/assets/logo/database.jpg',
  },
];

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing.unit * 3,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    display: 'block',
    width: '100%',
    height: '50%',
  },

});

const mb = {
  margin: '5px',
}



class Mainpage extends React.Component {
  state = {
    activeStep: 0,
    expanded: null,
  };




  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep, expanded } = this.state;
    const maxSteps = tutorialSteps.length;
    return (
        <div className={classes.root}>
        <Grid container spacing={24}>
        <Grid item xs={8}>
        <Card className="animated flipInX" style={mb}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                React 16
              </Typography>
              <Typography component="p">
                Frontend page is made by react 16.
                Using react-router we made SPA(Single Page Application)
                We used Webpack, Babel for compile environment
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn React
            </Button>
            <Button size="small" color="primary">
              Learn SPA
            </Button>
          </CardActions>
        </Card>
        <Card className="animated flipInX delay-1s" style={mb}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                NodeJS
              </Typography>
              <Typography component="p">
                Backend is made by NodeJs.
                We used Express, Axios, Node-sass, Lodash, Multer
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn NodeJS
            </Button>
            <Button size="small" color="primary">
              Learn Express
            </Button>
          </CardActions>
        </Card>
        <Card className="animated flipInX delay-2s" style={mb}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                JsonWebToken
              </Typography>
              <Typography component="p">
                Session is made by JWT(JsonWebToken).
                Also we used local sessionStorage to reduce server overload.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn JWT
            </Button>
            <Button size="small" color="primary">
              Learn SessionStorage
            </Button>
          </CardActions>
        </Card>
        <Card className="animated flipInX delay-3s" style={mb}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Bcrypt
              </Typography>
              <Typography component="p">
                We used Bcrypt for password encryption.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn Bcrypt
            </Button>
          </CardActions>
        </Card>

        </Grid>
        <Grid item xs={4} className="animated fadeIn delay-2s">
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')} style={mb}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>comment</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              test
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')} style={mb}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>test</Typography>
            <Typography>test</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              test
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')} style={mb}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>test</Typography>
            <Typography>test</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              test
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')} style={mb}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>test</Typography>
            <Typography>test</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              test
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <Paper square elevation={0} className={classes.header} style={mb}>
          <Typography>{tutorialSteps[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
          style={mb}
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.imgPath} alt={step.label} />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
        </Grid>
        </Grid>
      </div>
    );
  }
};

Mainpage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Mainpage);
