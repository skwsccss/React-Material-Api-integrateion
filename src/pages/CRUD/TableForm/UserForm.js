import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Chip from '@material-ui/core/Chip';
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

class UsersFrm extends React.Component {
    state = {
        columns: [
            {
                name: 'Name',
                options: {
                    filter: true
                }
            },
            {
                name: 'approxBirthDate',
                options: {
                    filter: true,
                }
            },
            {
                name: 'city',
                options: {
                    filter: true,
                    customBodyRender: (value) => (
                        <LinearProgress variant="determinate" color="secondary" value={value} />
                    )
                }
            },
            {
                name: 'Phone',
                options: {
                    filter: true,
                    customBodyRender: (value) => {
                        if (value === 'active') {
                            return (<Chip label="Active" color="secondary" />);
                        }
                        if (value === 'non-active') {
                            return (<Chip label="Non Active" color="primary" />);
                        }
                        return (<Chip label="Unknown" />);
                    }
                }
            },
            {
                name: 'token',
                options: {
                    filter: true,
                    customBodyRender: (value) => {
                        const nf = new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        });

                        return nf.format(value);
                    }
                }
            },
            {
                name: 'oneTimeVerificationCode',
                options: {
                    filter: false,
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
            selectableRows: false
        };
        return (
            <div className={classes.table}>
                <MUIDataTable
                    title="Users"
                    data={data}
                    columns={columns}
                    options={options}
                />
            </div>
        );
    }
}

UsersFrm.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UsersFrm);