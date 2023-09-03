from . import db

class Transaction(db.Model):
    __tablename__ = 'transaction'
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(100), nullable=False)
    type = db.Column(db.String(100), nullable=False)
    date = db.Column(db.Date, nullable=False)
    price = db.Column(db.Float, nullable=False)

    def to_json(self):
        return {
            'id': self.id,
            'category': self.category,
            'type': self.type,
            'date': self.date,
            'price': self.price
        }