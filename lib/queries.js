const {aql} = require('arangojs');

const wordMatch = (w, db) => db.query(aql`
  for w in words
  filter w.word == ${w}
  return w`
);

const wordMatchId = (w, db) => db.query(aql`
  for wl in words
  filter wl._id == ${w}
  return wl`
);

const synRelationForWord = (fromId, db) => db.query(aql`
  for rel in synRelations
  filter rel._from == ${fromId}
  return rel`
);

const familyRelationForWord = (fromId, db) => db.query(aql`
  for rel in familyRelations
  filter rel._from == ${fromId}
  return rel`
);

const varianteRelationForWord = (fromId, db) => db.query(aql`
  for rel in varianteRelations
  filter rel._from == ${fromId}
  return rel`
);

const equivRelationForWord = (fromId, db) => db.query(aql`
  for rel in equivRelations
  filter rel._from == ${fromId}
  return rel`
);

const lemmeRelationForWord = (fromId, db) => db.query(aql`
  for rel in lemmeRelations
  filter rel._from == ${fromId}
  return rel`
);

const posRelationForWord = (fromId, db) => db.query(aql`
  for rel in posRelations
  filter rel._from == ${fromId}
  return rel`
);

const associatedRelationForWord = (fromId, db) => db.query(aql`
  for rel in associatedRelations
  filter rel._from == ${fromId}
  return rel`
);

const getAllEquivRelations = db => db.query(aql`
  for rel in equivRelations
  return rel`
);

const getAllVarianteRelations = db => db.query(aql`
  for rel in varianteRelations
  return rel`
);

const getAllLemmeRelations = db => db.query(aql`
  for rel in lemmeRelations
  return rel`
);

const getAllPosRelations = db => db.query(aql`
  for rel in posRelations
  return rel`
);

const getAllAssociatedRelations = db => db.query(aql`
  for rel in associatedRelations
  return rel`
);

module.exports = {
	wordMatch,
	wordMatchId,
	getAllLemmeRelations,
	getAllEquivRelations,
	getAllVarianteRelations,
	getAllPosRelations,
	getAllAssociatedRelations,
	synRelationForWord,
	lemmeRelationForWord,
	equivRelationForWord,
	familyRelationForWord,
	varianteRelationForWord,
	posRelationForWord,
	associatedRelationForWord
};
