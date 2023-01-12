/**
 * @desc Get habits
 * @route GET /api/habits
 * @access Private
 * @param {int} req Request object
 * @param {int} res Response object
 */
const getHabits = (req, res) => {
  res.status(200).json({
    message: "List of habits",
  });
};

/**
 * @desc Get habit
 * @route GET /api/habits/:id
 * @access Private
 * @param {int} req Request object
 * @param {int} res Response object
 */
const getHabit = (req, res) => {
  res.status(200).json({
    message: `Single habit ${req.params.id}`,
  });
};

/**
 * @desc Add habit
 * @route POST /api/habits
 * @access Private
 * @param {int} req Request object
 * @param {int} res Response object
 */
const addHabit = (req, res) => {
  res.status(200).json({
    message: "Add habit",
  });
};

/**
 * @desc Edit habit
 * @route PUT /api/habits/:id
 * @access Private
 * @param {int} req Request object
 * @param {int} res Response object
 */
const editHabit = (req, res) => {
  res.status(200).json({
    message: `Edit habit ${req.params.id}`,
  });
};

/**
 * @desc Delete habit
 * @route DELETE /api/habits/:id
 * @access Private
 * @param {int} req Request object
 * @param {int} res Response object
 */
const deleteHabit = (req, res) => {
  res.status(200).json({
    message: `Delete habit ${req.params.id}`,
  });
};

module.exports = {
    getHabits,
    getHabit,
    addHabit,
    editHabit,
    deleteHabit
}
