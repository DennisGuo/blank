package cn.geobeans.web.common.database;

import java.util.Collection;
import java.util.List;

/**
 * 数据库操作接口
 * Created by Guo on 2016/8/31.
 */
public interface Dao<T, PK> {

    void save(final T entity);

    T get(final PK id);

    T load(final PK id);

    List<T> get(final Collection<PK> ids);

    void delete(final T entity);

    List<T> getAll();

//    void delete(final PK id);
}
