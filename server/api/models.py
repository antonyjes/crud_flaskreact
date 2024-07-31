from .init import db

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    taskName = db.Column(db.String(200))
    status = db.Column(db.String(200))
    date = db.Column(db.Date(), default=db.func.current_date())

    def to_dict(self):
        return {
            'id': self.id,
            'taskName': self.taskName,
            'status': self.status,
            'date': self.date.isoformat()
        }