const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const packages = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  }

  repositories.push(packages);

  return response.json(packages);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;

  const findID = repositories.findIndex(packages => 
    packages.id === id  
  );

  if (findID === -1) {
    return response.status(400).json({ error: 'packages does not exists.' });
  }

  const packages = {
    id,
    title,
    url,
    techs,
    likes: repositories[findID].likes,
  };

  repositories[findID] = packages

  return response.json(packages);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const findID = repositories.findIndex(packages => 
    packages.id === id  
  );

  if (findID >= 0) {
    repositories.splice(findID, 1);
  } else {
    return response.status(400).json({ error: 'packages does not exists.' });
  }

  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const findpackages = repositories.find(packages => 
    packages.id === id  
  );

  if (!findpackages) {
    return response.status(400).json({ error: 'packages does not exists.' });
  }

  findpackages.likes += 1;

  return response.json(findpackages);
});

module.exports = app;
