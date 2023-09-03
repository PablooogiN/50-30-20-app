import os
from . import create_app
from .models import Transaction
from . import db
from flask import jsonify, request, abort

app = create_app(os.getenv('FLASK_CONFIG') or 'default')

@app.route("/transactions", methods=["GET"])
def get_transacitons():
    transactions = Transaction.query.all()
    return jsonify([transaction.to_json() for transaction in transactions])

@app.route("/transaction/<int:id>", methods=["GET"])
def get_transaction(id):
    transaction = Transaction.query.get(id)
    if transaction is None:
        abort(404)
    return jsonify(transaction.to_json())

@app.route("/transaction/<int:id>", methods=["DELETE"])
def delete_transaction(id):
    transaction = Transaction.query.get(id)
    if transaction is None:
        abort(404)
    db.session.delete(transaction)
    db.session.commit()
    return jsonify({'result': True})

@app.route('/transaction', methods=['POST'])
def create_transaction():
    if not request.json:
        abort(400)
    transaction = Transaction(
        category=request.json.get('category'),
        type=request.json.get('type'),
        date=request.json.get('date'),
        price=request.json.get('price')
    )
    db.session.add(transaction)
    db.session.commit()
    return jsonify(transaction.to_json()), 201

@app.route('/transaction/<int:id>', methods=['PUT'])
def update_transaction(id):
    if not request.json:
        abort(400)
    transaction = Transaction.query.get(id)
    if transaction is None:
        abort(404)
    transaction.category = request.json.get('category', transaction.category)
    transaction.type = request.json.get('type', transaction.type)
    transaction.date = request.json.get('date', transaction.date)
    transaction.price = request.json.get('price', transaction.price)
    db.session.commit()
    return jsonify(transaction.to_json())