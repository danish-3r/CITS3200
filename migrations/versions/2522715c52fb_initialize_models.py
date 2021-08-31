"""Initialize models

Revision ID: 2522715c52fb
Revises: 
Create Date: 2021-08-26 02:35:03.913825

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2522715c52fb'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('cluster_fee',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('year', sa.String(length=64), nullable=True),
    sa.Column('cluster', sa.Integer(), nullable=True),
    sa.Column('fee', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_cluster_fee_cluster'), 'cluster_fee', ['cluster'], unique=False)
    op.create_index(op.f('ix_cluster_fee_fee'), 'cluster_fee', ['fee'], unique=False)
    op.create_index(op.f('ix_cluster_fee_year'), 'cluster_fee', ['year'], unique=False)
    op.create_table('course_fee_types',
    sa.Column('course_code', sa.Integer(), nullable=False),
    sa.Column('fee_type_code', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('course_code', 'fee_type_code')
    )
    op.create_index(op.f('ix_course_fee_types_course_code'), 'course_fee_types', ['course_code'], unique=False)
    op.create_index(op.f('ix_course_fee_types_fee_type_code'), 'course_fee_types', ['fee_type_code'], unique=False)
    op.create_table('course_fees',
    sa.Column('fee_type_code', sa.Integer(), nullable=False),
    sa.Column('course_code', sa.Integer(), nullable=False),
    sa.Column('year', sa.Integer(), nullable=True),
    sa.Column('fee', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('fee_type_code', 'course_code')
    )
    op.create_table('courses',
    sa.Column('course_code', sa.Integer(), nullable=False),
    sa.Column('course_name', sa.String(length=128), nullable=True),
    sa.Column('version', sa.Integer(), nullable=True),
    sa.Column('credit', sa.Integer(), nullable=True),
    sa.Column('req_credit', sa.Integer(), nullable=True),
    sa.Column('ctc', sa.Integer(), nullable=True),
    sa.Column('broad_ctc', sa.String(length=32), nullable=True),
    sa.PrimaryKeyConstraint('course_code'),
    sa.UniqueConstraint('course_name')
    )
    op.create_index(op.f('ix_courses_course_code'), 'courses', ['course_code'], unique=False)
    op.create_table('study_abroad_fees',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('fee_type_code', sa.Integer(), nullable=True),
    sa.Column('course_code', sa.Integer(), nullable=True),
    sa.Column('course_name', sa.String(length=128), nullable=True),
    sa.Column('year', sa.Integer(), nullable=True),
    sa.Column('fee', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_study_abroad_fees_course_code'), 'study_abroad_fees', ['course_code'], unique=False)
    op.create_index(op.f('ix_study_abroad_fees_fee_type_code'), 'study_abroad_fees', ['fee_type_code'], unique=False)
    op.create_table('unit',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('unit_cd', sa.String(length=64), nullable=True),
    sa.Column('title', sa.String(length=128), nullable=True),
    sa.Column('version', sa.Integer(), nullable=True),
    sa.Column('points', sa.Integer(), nullable=True),
    sa.Column('foe', sa.Integer(), nullable=True),
    sa.Column('census_date', sa.Date(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_unit_title'), 'unit', ['title'], unique=True)
    op.create_index(op.f('ix_unit_unit_cd'), 'unit', ['unit_cd'], unique=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_unit_unit_cd'), table_name='unit')
    op.drop_index(op.f('ix_unit_title'), table_name='unit')
    op.drop_table('unit')
    op.drop_index(op.f('ix_study_abroad_fees_fee_type_code'), table_name='study_abroad_fees')
    op.drop_index(op.f('ix_study_abroad_fees_course_code'), table_name='study_abroad_fees')
    op.drop_table('study_abroad_fees')
    op.drop_index(op.f('ix_courses_course_code'), table_name='courses')
    op.drop_table('courses')
    op.drop_table('course_fees')
    op.drop_index(op.f('ix_course_fee_types_fee_type_code'), table_name='course_fee_types')
    op.drop_index(op.f('ix_course_fee_types_course_code'), table_name='course_fee_types')
    op.drop_table('course_fee_types')
    op.drop_index(op.f('ix_cluster_fee_year'), table_name='cluster_fee')
    op.drop_index(op.f('ix_cluster_fee_fee'), table_name='cluster_fee')
    op.drop_index(op.f('ix_cluster_fee_cluster'), table_name='cluster_fee')
    op.drop_table('cluster_fee')
    # ### end Alembic commands ###
