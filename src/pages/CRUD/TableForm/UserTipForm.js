import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import MUIDataTable from 'mui-datatables';
import { UserData } from '../TableData'
const styles = theme => ({
    table: {
        '& > div': {
            overflow: 'auto'
        },
        '& table': {
            minWidth: 500,
            [theme.breakpoints.down('md')]: {
                '& td': {
                    height: 40
                }
            }
        }
    }
});

class UserTipFrm extends React.Component {
    state = {
        columns: [
            {
                name: 'ID',
                options: {
                    filter: true
                }
            },
            {
                name: 'UserID',
                options: {
                    filter: true,
                }
            },
            {
                name: 'TipID',
                options: {
                    filter: true,
                    customBodyRender: (value) => (
                        <LinearProgress variant="determinate" color="secondary" value={value} />
                    )
                }
            },
        ],
        data: UserData
    }

    render() {
        const { columns, data } = this.state;
        const { classes } = this.props;
        const options = {
            filterType: 'dropdown',
            responsive: 'stacked',
            print: true,
            rowsPerPage: 10,
            page: 0,
            selectableRows: false,
        };
        return (
            <div className={classes.table}>
                <MUIDataTable
                    title="Users Tip"
                    data={data}
                    columns={columns}
                    options={options}
                />
            </div>
        );
    }
}

UserTipFrm.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserTipFrm);