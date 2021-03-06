const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema.Types;

const nodeSchema = new mongoose.Schema({
	nid: {type: String, required: true},
	word: {type: String, required: true},
	type: {type: String, required: true},
	weight: {type: Number, required: true},
	r_associated: [{type: ObjectId, ref: 'Nodes'}],
	r_raff_sem: [{type: ObjectId, ref: 'Nodes'}],
	r_raff_morpho: [{type: ObjectId, ref: 'Nodes'}],
	r_domain: [{type: ObjectId, ref: 'Nodes'}],
	r_pos: [{type: ObjectId, ref: 'Nodes'}],
	r_syn: [{type: ObjectId, ref: 'Nodes'}],
	r_isa: [{type: ObjectId, ref: 'Nodes'}],
	r_anto: [{type: ObjectId, ref: 'Nodes'}],
	r_hypo: [{type: ObjectId, ref: 'Nodes'}],
	r_has_part: [{type: ObjectId, ref: 'Nodes'}],
	r_holo: [{type: ObjectId, ref: 'Nodes'}],
	r_locution: [{type: ObjectId, ref: 'Nodes'}],
	r_flpot: [{type: ObjectId, ref: 'Nodes'}],
	r_agent: [{type: ObjectId, ref: 'Nodes'}],
	r_patient: [{type: ObjectId, ref: 'Nodes'}],
	r_lieu: [{type: ObjectId, ref: 'Nodes'}],
	r_instr: [{type: ObjectId, ref: 'Nodes'}],
	r_carac: [{type: ObjectId, ref: 'Nodes'}],
	r_data: [{type: ObjectId, ref: 'Nodes'}],
	r_lemma: [{type: ObjectId, ref: 'Nodes'}],
	r_has_magn: [{type: ObjectId, ref: 'Nodes'}],
	r_has_antimagn: [{type: ObjectId, ref: 'Nodes'}],
	r_family: [{type: ObjectId, ref: 'Nodes'}],
	'r_carac-1': [{type: ObjectId, ref: 'Nodes'}],
	'r_agent-1': [{type: ObjectId, ref: 'Nodes'}],
	'r_instr-1': [{type: ObjectId, ref: 'Nodes'}],
	'r_patient-1': [{type: ObjectId, ref: 'Nodes'}],
	'r_domain-1': [{type: ObjectId, ref: 'Nodes'}],
	'r_lieu-1': [{type: ObjectId, ref: 'Nodes'}],
	r_chunk_pred: [{type: ObjectId, ref: 'Nodes'}],
	r_lieu_action: [{type: ObjectId, ref: 'Nodes'}],
	r_action_lieu: [{type: ObjectId, ref: 'Nodes'}],
	r_sentiment: [{type: ObjectId, ref: 'Nodes'}],
	r_error: [{type: ObjectId, ref: 'Nodes'}],
	r_manner: [{type: ObjectId, ref: 'Nodes'}],
	r_meaning: [{type: ObjectId, ref: 'Nodes'}],
	r_infopot: [{type: ObjectId, ref: 'Nodes'}],
	r_telic_role: [{type: ObjectId, ref: 'Nodes'}],
	r_agentif_role: [{type: ObjectId, ref: 'Nodes'}],
	'r_verbe-action': [{type: ObjectId, ref: 'Nodes'}],
	'r_action-verbe': [{type: ObjectId, ref: 'Nodes'}],
	r_conseq: [{type: ObjectId, ref: 'Nodes'}],
	r_causatif: [{type: ObjectId, ref: 'Nodes'}],
	'r_adj-verbe': [{type: ObjectId, ref: 'Nodes'}],
	'r_verbe-adj': [{type: ObjectId, ref: 'Nodes'}],
	r_chunk_sujet: [{type: ObjectId, ref: 'Nodes'}],
	r_chunk_objet: [{type: ObjectId, ref: 'Nodes'}],
	r_chunk_loc: [{type: ObjectId, ref: 'Nodes'}],
	r_chunk_instr: [{type: ObjectId, ref: 'Nodes'}],
	r_time: [{type: ObjectId, ref: 'Nodes'}],
	'r_object>mater': [{type: ObjectId, ref: 'Nodes'}],
	'r_mater>object': [{type: ObjectId, ref: 'Nodes'}],
	'r_successeur-time': [{type: ObjectId, ref: 'Nodes'}],
	r_make: [{type: ObjectId, ref: 'Nodes'}],
	r_product_of: [{type: ObjectId, ref: 'Nodes'}],
	r_against: [{type: ObjectId, ref: 'Nodes'}],
	'r_against-1': [{type: ObjectId, ref: 'Nodes'}],
	r_implication: [{type: ObjectId, ref: 'Nodes'}],
	r_quantificateur: [{type: ObjectId, ref: 'Nodes'}],
	r_masc: [{type: ObjectId, ref: 'Nodes'}],
	r_fem: [{type: ObjectId, ref: 'Nodes'}],
	r_equiv: [{type: ObjectId, ref: 'Nodes'}],
	'r_manner-1': [{type: ObjectId, ref: 'Nodes'}],
	r_agentive_implication: [{type: ObjectId, ref: 'Nodes'}],
	r_has_instance: [{type: ObjectId, ref: 'Nodes'}],
	r_verb_real: [{type: ObjectId, ref: 'Nodes'}],
	r_chunk_head: [{type: ObjectId, ref: 'Nodes'}],
	r_similar: [{type: ObjectId, ref: 'Nodes'}],
	'r_set>item': [{type: ObjectId, ref: 'Nodes'}],
	'r_item>set': [{type: ObjectId, ref: 'Nodes'}],
	'r_processus>agent': [{type: ObjectId, ref: 'Nodes'}],
	r_variante: [{type: ObjectId, ref: 'Nodes'}],
	r_syn_strict: [{type: ObjectId, ref: 'Nodes'}],
	r_is_smaller_than: [{type: ObjectId, ref: 'Nodes'}],
	r_is_bigger_than: [{type: ObjectId, ref: 'Nodes'}],
	r_accomp: [{type: ObjectId, ref: 'Nodes'}],
	'r_processus>patient': [{type: ObjectId, ref: 'Nodes'}],
	r_verb_ppas: [{type: ObjectId, ref: 'Nodes'}],
	r_cohypo: [{type: ObjectId, ref: 'Nodes'}],
	r_verb_ppre: [{type: ObjectId, ref: 'Nodes'}],
	r_der_morpho: [{type: ObjectId, ref: 'Nodes'}],
	r_has_auteur: [{type: ObjectId, ref: 'Nodes'}],
	r_has_personnage: [{type: ObjectId, ref: 'Nodes'}],
	r_can_eat: [{type: ObjectId, ref: 'Nodes'}],
	r_has_actors: [{type: ObjectId, ref: 'Nodes'}],
	r_deplac_mode: [{type: ObjectId, ref: 'Nodes'}],
	r_has_interpret: [{type: ObjectId, ref: 'Nodes'}],
	r_color: [{type: ObjectId, ref: 'Nodes'}],
	r_cible: [{type: ObjectId, ref: 'Nodes'}],
	r_symptomes: [{type: ObjectId, ref: 'Nodes'}],
	'r_predecesseur-time': [{type: ObjectId, ref: 'Nodes'}],
	r_diagnostique: [{type: ObjectId, ref: 'Nodes'}],
	'r_predecesseur-space': [{type: ObjectId, ref: 'Nodes'}],
	'r_successeur-space': [{type: ObjectId, ref: 'Nodes'}],
	r_social_tie: [{type: ObjectId, ref: 'Nodes'}],
	r_tributary: [{type: ObjectId, ref: 'Nodes'}],
	'r_sentiment-1': [{type: ObjectId, ref: 'Nodes'}],
	'r_linked-with': [{type: ObjectId, ref: 'Nodes'}],
	r_foncteur: [{type: ObjectId, ref: 'Nodes'}],
	r_comparison: [{type: ObjectId, ref: 'Nodes'}],
	r_but: [{type: ObjectId, ref: 'Nodes'}],
	'r_but-1': [{type: ObjectId, ref: 'Nodes'}],
	r_own: [{type: ObjectId, ref: 'Nodes'}],
	'r_own-1': [{type: ObjectId, ref: 'Nodes'}],
	r_verb_aux: [{type: ObjectId, ref: 'Nodes'}],
	'r_predecesseur-logic': [{type: ObjectId, ref: 'Nodes'}],
	'r_successeur-logic': [{type: ObjectId, ref: 'Nodes'}],
	'r_isa-incompatible': [{type: ObjectId, ref: 'Nodes'}],
	r_incompatible: [{type: ObjectId, ref: 'Nodes'}],
	r_node2relnode: [{type: ObjectId, ref: 'Nodes'}],
	r_require: [{type: ObjectId, ref: 'Nodes'}],
	r_is_instance_of: [{type: ObjectId, ref: 'Nodes'}],
	r_is_concerned_by: [{type: ObjectId, ref: 'Nodes'}],
	r_compl_agent: [{type: ObjectId, ref: 'Nodes'}],
	r_beneficiaire: [{type: ObjectId, ref: 'Nodes'}],
	r_descend_de: [{type: ObjectId, ref: 'Nodes'}],
	r_domain_subst: [{type: ObjectId, ref: 'Nodes'}],
	r_prop: [{type: ObjectId, ref: 'Nodes'}],
	r_activ_voice: [{type: ObjectId, ref: 'Nodes'}],
	r_make_use_of: [{type: ObjectId, ref: 'Nodes'}],
	r_is_used_by: [{type: ObjectId, ref: 'Nodes'}],
	'r_adj-nomprop': [{type: ObjectId, ref: 'Nodes'}],
	'r_nomprop-adj': [{type: ObjectId, ref: 'Nodes'}],
	'r_adj-adv': [{type: ObjectId, ref: 'Nodes'}],
	'r_adv-adj': [{type: ObjectId, ref: 'Nodes'}],
	r_homophone: [{type: ObjectId, ref: 'Nodes'}],
	r_potential_confusion: [{type: ObjectId, ref: 'Nodes'}],
	r_concerning: [{type: ObjectId, ref: 'Nodes'}],
	'r_adj>nom': [{type: ObjectId, ref: 'Nodes'}],
	'r_nom>adj': [{type: ObjectId, ref: 'Nodes'}],
	r_translation: [{type: ObjectId, ref: 'Nodes'}],
	r_link: [{type: ObjectId, ref: 'Nodes'}],
	r_cooccurrence: [{type: ObjectId, ref: 'Nodes'}],
	r_aki: [{type: ObjectId, ref: 'Nodes'}],
	r_wiki: [{type: ObjectId, ref: 'Nodes'}],
	r_annotation_exception: [{type: ObjectId, ref: 'Nodes'}],
	r_annotation: [{type: ObjectId, ref: 'Nodes'}],
	r_inhib: [{type: ObjectId, ref: 'Nodes'}],
	r_prev: [{type: ObjectId, ref: 'Nodes'}],
	r_succ: [{type: ObjectId, ref: 'Nodes'}],
	r_termgroup: [{type: ObjectId, ref: 'Nodes'}],
	'r_raff_sem-1': [{type: ObjectId, ref: 'Nodes'}],
	r_learning_model: [{type: ObjectId, ref: 'Nodes'}]
});

const Node = mongoose.model('Nodes', nodeSchema);

module.exports = {Node};
