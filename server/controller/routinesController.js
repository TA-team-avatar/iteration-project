const db = require('../model/dbModel');

// controllers for getting routines and individual workouts
// get all

const routinesController = {};

routinesController.getRoutines = async (req, res, next) => {
  const { id } = req.query;

  const queryRoutine =
    'SELECT r.*, rw.* FROM routines r \
  LEFT JOIN routine_workout rw ON rw.routine_id = r.id \
  LEFT JOIN workouts w ON w.id = rw.workout_id \
  WHERE r.owner_user_id = $1';

  const paramRoutine = [id];
  try {
    const routines = await db.query(queryRoutine, paramRoutine);
    console.log(routines.rows);

    return next();
  } catch (err) {
    return next({
      log: `Error with routinesController.getRoutines Error: ${err}`,
      message: { err: `error from routinesController ${err}` },
    });
  }
};

routinesController.deleteRoutine = async (req, res, next) => {
  // const queryRoutine =
  try {
    //   const
  } catch (err) {
    return next({
      log: `Error with routinesController.deleteRoutine Error: ${err}`,
      message: { err: `error from routinesController ${err}` },
    });
  }
};

module.exports = routinesController;
