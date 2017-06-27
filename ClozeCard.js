//ClozeCard.js

function ClozeCard(text, cloze) {
	if(this instanceof ClozeCard) {
		this.cloze = cloze;
		this.fullText = text;
		if(this.fullText.indexOf(this.cloze) == -1) {
			console.log("\'"+ text + "\'" + " does not contain " + "\'" + cloze + "\'");
			return null;
		} else {
			this.partial = this.fullText.replace(cloze, '...');
		}
	} else {
		return new ClozeCard(text, cloze);
	}
}

ClozeCard.prototype.containsCloze = function() {
	if(this.fullText.indexOf(this.cloze) == -1) {
		return false;
	} else {
		return true;
	}
}

module.exports = ClozeCard;