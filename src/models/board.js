module.exports =(sequelize, DataTypes) => {

    const Board = sequelize.define("board",{
        name: {
            type : DataTypes.STRING,
            allowNull: false
        }
    });
    Board.associate = function(models){
        models.board.belongsTo(models.user);
    };
    return Board;
};