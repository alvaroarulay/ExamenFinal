module.exports= function(sequelize, DataTypes){
	 return sequelize.define('nota', {nombre: DataTypes.STRING,
		 notaFinal: DataTypes.STRING									                                       	              }
                             );
}
