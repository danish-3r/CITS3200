"""empty message

Revision ID: 078ede6a3029
Revises: 610ce4744e65
Create Date: 2021-08-31 17:35:28.821056

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '078ede6a3029'
down_revision = '610ce4744e65'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index('ix_clusterfee_fee', table_name='clusterfee')
    op.drop_table('clusterfee')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('clusterfee',
    sa.Column('cluster', sa.INTEGER(), nullable=False),
    sa.Column('fee', sa.INTEGER(), nullable=True),
    sa.PrimaryKeyConstraint('cluster')
    )
    op.create_index('ix_clusterfee_fee', 'clusterfee', ['fee'], unique=False)
    # ### end Alembic commands ###
