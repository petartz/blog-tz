import React from 'react'
import clsx from 'clsx'
import DeleteIcon from '@material-ui/icons/Delete'
import GlobalFilter from './GlobalFilter'
import IconButton from '@material-ui/core/IconButton'
import { lighten, makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'

const useToolbarStyles = makeStyles(theme => ({
  root: {
    borderRadius: ".5rem",
    backgroundColor: "",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1 ),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
    backgroundColor: "",
    borderRadius: ".5rem",
    width: "fit-content"
  },
}))

const TableToolbar = props => {
  const classes = useToolbarStyles()
  const {
    numSelected,
    deleteUserHandler,
    preGlobalFilteredRows,
    setGlobalFilter,
    globalFilter,
  } = props
  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {/* <AddUserDialog addUserHandler={addUserHandler} /> */}
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography 
        className={classes.title} 
        variant="h6"
        id="tableTitle">
          Storms
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete" onClick={deleteUserHandler}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      )}
    </Toolbar>
  )
}

TableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  addUserHandler: PropTypes.func.isRequired,
  deleteUserHandler: PropTypes.func.isRequired,
  setGlobalFilter: PropTypes.func.isRequired,
  preGlobalFilteredRows: PropTypes.array.isRequired,
  globalFilter: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default TableToolbar
