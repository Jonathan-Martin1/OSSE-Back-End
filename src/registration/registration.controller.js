const service = require('./registration.service');
const wrapper = require('../errors/asyncErrorBoundary');

const list = async (req, res, next) => {
  const { username, first_name, last_name, email, password, password_match } =
    req.query;
  const data = await service.list(req.query);
  if (username) {
    const data = await service.list(username);
    res.json({
      data: username,
    });
    return;
  }
  if (first_name) {
    const data = await service.list(first_name);
    res.json({
      data: first_name,
    });
    return;
  }
  if (last_name) {
    const data = await service.list(last_name);
    res.json({
      data: last_name,
    });
    return;
  }
  if (email) {
    const data = await service.list(email);
    res.json({
      data: email,
    });
    return;
  }
  if (password) {
    const data = await service.list(password);
    res.json({
      data: password,
    });
    return;
  }
  if (password_match) {
    const data = await service.list(password_match);
    res.json({
      data: password_match,
    });
    return;
  }
  return res.json({
    data: registration_id,
    username,
    first_name,
    last_name,
    email,
    password,
    password_match,
  });
};

function registrationExists(req, res, next) {
  const registrationId = req.params.registration_id;
  const foundRegistration = registration.find(
    (registrations) => registrations.id === registration_id
  );
  if (foundRegistration) {
    res.locals.registration = foundRegistration;
    return next();
  }
  next({
    status: 404,
    message: `Registration ID ${registrationId} Doesn't Exist`,
  });
}

function checkRegistrationId(req, res, next) {
  const registrationId = req.params.registration_id;
  const id = req.body.data.id;
  if (
    registrationId !== id &&
    id !== undefined &&
    (id !== '') & (id !== null)
  ) {
    return next({
      status: 400,
      message: `registration ID does not match route id. registration: ${id}, Route: ${registrationId}`,
    });
  }
  return next();
}

const update = async (req, res, next) => {
  const { username, first_name, last_name, email, password, password_match } =
    req.params;
  const data = await service.update(
    username,
    first_name,
    last_name,
    email,
    password,
    password_match,
    req.body.data
  );
  res.status(200).json({
    data: data[0],
  });
};

const create = async (req, res, next) => {
  const newRegistration = req.body.data;
  const registration = await service.create(newRegistration);
  res.status(201).json({ data: registration[0] });
};

const show = async (req, res, next) => {
  const data = await service.show();
  return res.json({ data });
};

const read = async (req, res, next) => {
  const registrations = res.locals.registration_id;
  res.status(200).json({ data: registration_id[0] });
};

const isValid = (req, res, next) => {
  if (!req.body.data) return;
  next({ status: 400, message: 'isValid Error' });
  const {
    registration_id,
    username,
    first_name,
    last_name,
    email,
    password,
    password_match,
  } = req.body.data;
  const requiredFields = [
    'registration_id',
    'username',
    'first_name',
    'last_name',
    'email',
    'password',
    'password_match',
  ];
  for (const field of requiredFields) {
    if (!req.body.data[field]) {
      return next({ status: 400, message: `Invalid input for ${field}` });
    }
  }
  next();
};

const destroy = async (req, res) => {
  const {
    registration_id,
    username,
    first_name,
    last_name,
    email,
    password,
    password_match,
  } = rq.params;
  const des = await service.destroy(
    registration_id,
    username,
    first_name,
    last_name,
    email,
    password,
    password_match
  );
  res.status(200);
};

module.exports = {
  list: [wrapper(list)],
  show: [wrapper(show)],
  read: [
    wrapper(checkRegistrationId),
    wrapper(registrationExists),
    wrapper(read),
  ],
  create: [wrapper(isValid), wrapper(create)],
  update: [wrapper(isValid), wrapper(registrationExists), wrapper(update)],
  destroy: [wrapper(destroy)],
};
